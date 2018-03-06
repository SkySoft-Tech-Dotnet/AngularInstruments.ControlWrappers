using System;
using System.Collections.Generic;
using DashboardApp.Controllers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace DashboardApp.Controllers
{
  public class PersonViewModel
  {
    public string Login { get; set; }
    public string Password { get; set; }
  }

  [Route("api/[Controller]")]
  public class LoginController : Controller
  {
    public static Person LoginedPerson { get; set; }
  
    [HttpPost]
    public IActionResult LoginAnswer([FromBody] PersonViewModel personViewModel)
    {
     // Person person = JsonConvert.DeserializeObject<Person>(_person);
      var person = GetPersonInfo(personViewModel, Users);
      if (person == null)
      {
        var result = Ok("Login or password bad. Try again");
        result.StatusCode = 403;
        return result; 
      }
      else
      {
        LoginedPerson = person;
        return Ok($"User {LoginedPerson.Username} seccessfuly logined");
      }
    }

    [HttpGet]
    public IActionResult LoginedUser()
    {
      if (LoginedPerson == null)
      {
        var result = Ok("No logined user");
        result.StatusCode = 403;
        return result;
      }
      else 
        return Ok(LoginedPerson);
    }

    public List<Person> Users { get; set; }
    public LoginController()
    {
      //LoginedPerson = new Person();
      Users = new List<Person>
      {
        new Person { Login="q", Password="1", Username="John"},
        new Person { Login="w", Password="2", Username="Bob"},
        new Person { Login="e", Password="3", Username="Mike"},
        new Person { Login="r", Password="4", Username="Luk"},
        new Person { Login="t", Password="5", Username="Eddi"},
        new Person { Login="y", Password="6", Username="Rick"}
      };
    }
    private Person GetPersonInfo(PersonViewModel person, List<Person> listPerson)
    {
      if (person == null)
        return null;
      foreach (var user in listPerson)
        if (person.Login == user.Login &&
            person.Password == user.Password)
        return user;
      return null;
    }

  }
}
