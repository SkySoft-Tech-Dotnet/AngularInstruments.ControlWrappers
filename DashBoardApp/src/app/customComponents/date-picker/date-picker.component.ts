import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap-datepicker';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent implements OnInit {

    ngOnInit() {
    }

    showCaendar() {
        $('#datepicker').datepicker();
        $('#datepicker').on('changeDate', function () {
            $('#datePickerInput').val(
                $('#datepicker').datepicker('getFormattedDate'))
        });
    }
}

