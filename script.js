$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://www.feriadosapp.com/api/holidays.json",
        success: function (data) {
            
            data.data.forEach((element) => {
                let fecha = element.date
                $("#feriados").append(
                    ` <tr>
              
              <td scope="row">${(fecha.split('-'))[1]}</td>
              <td>${(fecha.split('-'))[2]}</td>
              <td>${element.title}</td>
              <td>${element.extra}</td>
              <td>${element.law}</td>
          </tr>`)
            })
        },
        dataType: "json",
    });
});
