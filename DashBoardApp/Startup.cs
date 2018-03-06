using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace DashboardApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use( async (context,next)=>
            {
              await next();
              if (context.Response.StatusCode==404)
              {
                context.Request.Path = "/index.html";
                context.Response.StatusCode = 200;
                await next();
              }
            } );

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
      //app.UseMvc(routes =>
      //{
      //  routes.MapRoute(
      //      name: "default",
      //      template: "{controller=Hello}/{action=index}/{id?}");
      //});


         }
    }
}
