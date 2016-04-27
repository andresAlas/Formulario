(function(){
	var formulario = document.getElementsByName("formulario")[0],
	elementos = formulario.elements,
	boton = document.getElementById("btn");

	var validarNombre = function(e)
	{
		if (formulario.nombre.value == 0)
		{
			alert("Complete el Nombre");
			e.preventDefault();
		}
	};

	var validarRadio = function(e)
	{
		if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true)
		{
			// No va nada
		} else {
			alert("Completa el campo Sexo");
			e.preventDefault();
		}
	};

	var validarCheckbox = function(e)
	{
		if (formulario.terminos.checked == false)
		{
			alert("Acepta los Terminmos");
			e.preventDefault();
		}
	};

	var validar = function(e)
	{
		validarNombre(e);
		validarRadio(e);
		validarCheckbox(e);
	};

	formulario.addEventListener("submit", validar);
}())