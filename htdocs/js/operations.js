var basepath = "/webwork2_files/images/mathview/"; // images basepath
var categories =
[
	{
		image: basepath + "Base4.gif",
		tooltip:"Base",
		operators:
		[
			{
				image:basepath + "addition.jpg",
				tooltip:"addition",
				helpurl:"addition.html",
				latex:"{}+{}",
				PG:"+"
			},
			{
				image:basepath + "subtraction.jpg",
				tooltip:"subtraction",
				helpurl:"subtraction.html",
				latex:"{}-{}",
				PG:"-"
			},
			{
				image:basepath + "multiplication.jpg",
				tooltip:"multiplication",
				helpurl:"multiplication.html",
				latex:"{}*{}",
				PG:"*"
			},
			{
				image:basepath + "division.jpg",
				tooltip:"division",
				helpurl:"division.html",
				latex:"{}/{}",
				PG:"/"
			},
			{
				image:basepath + "fraction.jpg",
				tooltip:"fraction",
				helpurl:"fraction.html",
				latex:"\\frac{}{}",
				PG:"/"
			},
			{
				image:basepath + "exponentiation.jpg",
				tooltip:"exponentiation",
				helpurl:"exponentiation.html",
				latex:"{}^{}",
				PG:"^"
			},
			{
				image:basepath + "racine.jpg",
				tooltip:"racine",
				helpurl:"racine.html",
				latex:"\\sqrt{}",
				PG:"sqrt()"
			},
			{
				image:basepath + "racine.jpg",
				tooltip:"racine",
				helpurl:"racine.html",
				latex:"\\sqrt[]{}",
				PG:""
			},
			{
				image:basepath + "carre.jpg",
				tooltip:"carre",
				helpurl:"carre.html",
				latex:"{}^{1/2}",
				PG:"^(1/2)"
			},
			{
				image:basepath + "absolute.jpg",
				tooltip:"absolute",
				helpurl:"absolute.html",
				latex:"|{}|",
				PG:"abs()"
			}
		]
	},
	{
		image:basepath + "Parentheses.gif",
		tooltip:"Parentheses",
		operators:
		[
			{
				image:basepath + "parentheses.jpg",
				tooltip:"parentheses",
				helpurl:"parentheses.html",
				latex:"()",
				PG:"()"
			},
			{
				image:basepath + "squarebrackets.jpg",
				tooltip:"squarebrackets",
				helpurl:"squarebrackets.html",
				latex:"[]",
				PG:"[]"
			},
			{
				image:basepath + "curlybrackets.jpg",
				tooltip:"curlybrackets",
				helpurl:"curlybrackets.html",
				latex:"\\left \\{  \\right \\}",
				PG:"{}"
			}
		]
	},
	{
		image:basepath + "Trigonometry.gif",
		tooltip:"Trigonometry",
		operators:
		[
			{
				image:basepath + "pi.jpg",
				tooltip:"Pi",
				helpurl:"Pi.html",
				latex:"\\pi",
				PG:"pi"
			},
			{
				image:basepath + "sine.jpg",
				tooltip:"sine",
				helpurl:"sine.html",
				latex:"\\sin{}",
				PG:"sin( )"
			},
			{
				image:basepath + "cosine.jpg",
				tooltip:"cosine",
				helpurl:"cosine.html",
				latex:"\\cos{}",
				PG:"cos( )"
			},
			{
				image:basepath + "tangent.jpg",
				tooltip:"tangent",
				helpurl:"tangent.html",
				latex:"\\tan{}",
				PG:"tan( )"
			},
			{
				image:basepath + "cosecant .jpg",
				tooltip:"cosecant ",
				helpurl:"cosecant .html",
				latex:"\\csc{}",
				PG:"csc( )"
			},
			{
				image:basepath + "secant.jpg",
				tooltip:"secant",
				helpurl:"secant.html",
				latex:"\\sec{}",
				PG:"sec( )"
			},
			{
				image:basepath + "cotangent.jpg",
				tooltip:"cotangent",
				helpurl:"cotangent.html",
				latex:"\\cot{}",
				PG:"cot( )"
			},
			{
				image:basepath + "arcsin.jpg",
				tooltip:"arcsin",
				helpurl:"arcsin.html",
				latex:"\\sin^{-1}{}",
				PG:"arcsin( )"
			},
			{
				image:basepath + "arccos.jpg",
				tooltip:"arccos",
				helpurl:"arccos.html",
				latex:"\\cos^{-1}{}",
				PG:"arccos( )"
			},
			{
				image:basepath + "arctan.jpg",
				tooltip:"arctan",
				helpurl:"arctan.html",
				latex:"\\tan^{-1}{}",
				PG:"arctan( )"
			},
			{
				image:basepath + "arccot.jpg",
				tooltip:"arccot",
				helpurl:"arccot.html",
				latex:"\\cot^{-1}{}",
				PG:"arccot( )"
			},
			{
				image:basepath + "arcsec.jpg",
				tooltip:"arcsec",
				helpurl:"arcsec.html",
				latex:"\\sec^{-1}{}",
				PG:"arcsec( )"
			},
			{
				image:basepath + "arccsc.jpg",
				tooltip:"arccsc",
				helpurl:"arccsc.html",
				latex:"\\csc^{-1}{}",
				PG:"arccsc( )"
			}
		]
	},
	{
		image:basepath + "Logarithm1.gif",
		tooltip:"Logarithm",
		operators:
		[
			{
				image:basepath + "e.jpg",
				tooltip:"e",
				helpurl:"logarithm.html",
				latex:"e",
				PG:"e"
			},
			{
				image:basepath + "logarithm.jpg",
				tooltip:"logarithm",
				helpurl:"logarithm.html",
				latex:"\\log{}",
				PG:"log( )"
			},
			{
				image:basepath + "logarithmBase.jpg",
				tooltip:"logarithmBase",
				helpurl:"logarithmBase.html",
				latex:"\\log_{}{}",
				PG:"log( )"
			},
			{
				image:basepath + "naturalLogarithm.jpg",
				tooltip:"naturalLogarithm",
				helpurl:"naturalLogarithm.html",
				latex:"\\ln{}",
				PG:"ln( )"
			},
			{
				image:basepath + "eExp.jpg",
				tooltip:"eExp",
				helpurl:"eExp.html",
				latex:"e^{}",
				PG:"exp( )"
			}
		]
	},
	{
		image:basepath + "Intervals.gif",
		tooltip:"Intervals",
		operators:
		[
			{
				image:basepath + "[].jpg",
				tooltip:"[]",
				helpurl:"[].html",
				latex:"\\left[{},{} \\right]",
				PG:"[,]"
			},
			{
				image:basepath + "(].jpg",
				tooltip:"(]",
				helpurl:"(].html",
				latex:"\\left]{},{} \\right]",
				PG:"(,]"
			},
			{
				image:basepath + "[).jpg",
				tooltip:"[)",
				helpurl:"[).html",
				latex:"\\left[{},{} \\right[",
				PG:"[,)"
			},
			{
				image:basepath + "().jpg",
				tooltip:"()",
				helpurl:"().html",
				latex:"\\left]{},{} \\right[",
				PG:"(,)"
			},
			{
				image:basepath + "union.jpg",
				tooltip:"union",
				helpurl:"union.html",
				latex:"\\cup",
				PG:"U"
			}
		]
	},
	{
		image:basepath + "Others.gif",
		tooltip:"Other",
		operators:
		[
			{
				image:basepath + "infini.jpg",
				tooltip:"infini",
				helpurl:"infini.html",
				latex:"\\infty",
				PG:"Inf"
			},
			{
				image:basepath + "vector.jpg",
				tooltip:"vector",
				helpurl:"vector.html",
				latex:"\\vec{}",
				PG:"\mathit{\vec ()}"
			},
			{
				image:basepath + "sigma.jpg",
				tooltip:"sigma",
				helpurl:"sigma.html",
				latex:"\\sigma",
				PG:"sigma()"
			},
			{
				image:basepath + "theta.jpg",
				tooltip:"theta",
				helpurl:"theta.html",
				latex:"\\theta",
				PG:"theta()"
			}
		]
	},
];
