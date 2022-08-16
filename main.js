//Jquery 
        $(document).ready(function() {
            //Función para realizar operaciones 
            $(".design").click(function() {
                if (!$(this).hasClass("not")) {
                    if ($("#expression").val() == 0)
                        $("#expression").val($(this).text());
                    else
                        $("#expression").val($("#expression").val() + $(this).text());
                }
            });
            
  
            // Función borrar de a un número
            $('#backspace').click(function() {
                var value = $("#expression").val();
                if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
                    $("#expression").val(value.slice(0, value.length - 1));
                if (value.length == 1)
                    $("#expression").val("0");
            });
        });
  
        // Función borrar todo
        $("#allClear").click(function() {
            $("#expression").val("0");
            $("#result").val("0");
        });
  
        //Evaluación
        $("#equals").click(function() {
            var result;
            //Chequeo de error.
            try {
                result = (eval(($("#expression").val())));
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert("Error! Vuelva a introducir valores.");
                    $("#expression").val("0");
                    $("#result").val("0");
                }
                if (e instanceof TypeError) {
                    alert("Error! Vuelva a introducir valores.");
                    $("#expression").val("0");
                    $("#result").val("0");
                }
            }
  
            // Resultado correcto
            $("#result").val(result);
            $("#expression").val("0");
        });
 