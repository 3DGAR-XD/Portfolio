// Recuerda que hay que cambiar esto
if(window.location.href === "https://3dgar-xd.github.io/Portfolio")window.location.href += "/#home";
// Animation
$(".name").textillate();

const data = [
	web = {
		idModal:"stack-basico",
		modalTitle:"Stack Web Básico",
		modalText:"Stack Web Básico (HTML, CSS y Javascript)",
		modalImg: "./assets/images/stack-web-basico.webp",
		knowledges:[{name:"HTML",level:"60"}, {name:"CSS",level:"60"}, {name:"Javascript",level:"50"}], 
		domains:["Maquetado Semantico","Peticiones HTTP y Asincronía", "EcmaScript 6 y Animaciones"]
	},
	javascript = {
		idModal:"javascript",
		modalTitle:"Frameworks y Librerías Javascript",
		modalText:"JQuery y DoT.Js",
		knowledges:[{name:"JQuery",level:"30"},{name:"DoT.Js",level:"40"}],
		modalImg:"./assets/images/jquery.webp",
		domains: ["Manejo de Eventos","Condicionales", "Iteraciones"]
	},
	css = {
		idModal:"css",
		modalTitle:"Frameworks y Librerías Css",
		modalImg:"./assets/images/bootstrap.webp",
		modalText:"Bootstrap",
		knowledges:[{name:"Bootstrap",level:"40"}],
		domains: ["Modales", "Posicionamiento", "Grid", "Responsive"]
	},
	backend = {
		idModal:"backend",
		modalTitle:"Lenguajes Backend",
		modalImg:"./assets/images/backend.webp",
		modalText:"PHP",
		knowledges:[{name:"PHP",level:"30"}],
		domains:["Patrón de Diseño Modelo, Vista, Controlador"]
	},
	db = {
		idModal:"db",
		modalTitle:"Gestores de Base de Datos",
		modalImg:"./assets/images/db.webp",
		modalText:"MySQL",
		knowledges:[{name:"MySQL",level:"20"}],
		domains:["Consultas Básicas", "Procedimientos Almacenados","Vistas"]
	},
	debian = {
		idModal:"linux",
		modalTitle:"Linux OS",
		modalImg:"./assets/images/linux.webp",
		modalText:"Sistema Operativos Basados en GNU/Linux",
		knowledges:[{name: "Debian", level: "30"},{name: "Fedora", level: "10"}],
		domains:["Actulizaciónes del Sistema", "Instalación de Paquetes","Personalización del Sistema"]
	},
	git = {
		idModal:"git",
		modalTitle:"Sistemas de Control de Versiones",
		modalImg:"./assets/images/git.webp",
		modalText:"GIT",
		knowledges:[{name:"GIT",level:"30"}],
		domains: ["Gestión de Cambios","Configuración de Repositorios"]
	},
];

templateLaptop = `
{{~ it: data }}
	<div class="modal fade d-none d-lg-block" id="{{=data.idModal}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered my-auto">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">{{=data.modalTitle}}</h5>
				</div>
				<div class="modal-body">
					<div class="row align-items-center">
						<div class="col-6">
							<h4>{{=data.modalText}}</h4>
							<img src="{{=data.modalImg}}" alt="{{=data.modalTitle}}" class="img-modal">
						</div>
						<div class="col-6 my-2">
							<span class="my-2">Nivel de conocimientos (%)</span>
							{{~ data.knowledges: knowledge }}
								<div class="my-2">
									<h4>{{=knowledge.name}}</h4>
									<div class="progress position-relative">
										<div class="progress-bar" role="progressbar" aria-valuenow="{{=knowledge.level}}" aria-valuemin="0" aria-valuemax="100"></div>
										<span class="position-absolute m-auto bold">{{=knowledge.level}}%</span>
									</div>
								</div>
							{{~}}
							<span>
								Lo que domino de estas tecnologías:
							</span>
							<ol class="list-group list-group-numbered">
								{{~ data.domains: domain}}
									<li class="list-group-item">{{=domain}}</li>
								{{~}}
							</ol>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-orange" data-bs-dismiss="modal">Volver</button>
				</div>
			</div>
		</div>
	</div>
{{~}}
`;

templateMobile = `
{{~ it: data }}
	<div class="modal fade d-block d-lg-none" id="{{=data.idModal}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered my-auto">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">{{=data.modalTitle}}</h5>
				</div>
				<div class="modal-body">
					<div class="row align-items-center">
						<div class="col-6">
							<h4>{{=data.modalText}}</h4>
							<img src="{{=data.modalImg}}" alt="{{=data.modalTitle}}" class="img-modal">
						</div>
						<div class="col-6 my-2">
							<span class="my-2">Nivel de conocimientos (%)</span>
							{{~ data.knowledges: knowledge }}
								<div class="my-2">
									<h4>{{=knowledge.name}}</h4>
									<div class="progress position-relative">
										<div class="progress-bar" role="progressbar" aria-valuenow="{{=knowledge.level}}" aria-valuemin="0" aria-valuemax="100"></div>
										<span class="position-absolute m-auto bold">{{=knowledge.level}}%</span>
									</div>
								</div>
							{{~}}
							<span>
								Lo que domino de estas tecnologías:
							</span>
							<ol class="list-group list-group-numbered">
								{{~ data.domains: domain}}
									<li class="list-group-item">{{=domain}}</li>
								{{~}}
							</ol>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-orange" data-bs-dismiss="modal">Volver</button>
				</div>
			</div>
		</div>
	</div>
{{~}}
`;
if (window.innerWidth <= 992) {
	const tempFunc = doT.template(templateLaptop);
	const html = tempFunc(data);
	document.getElementById("modals-laptop").innerHTML = html;
}
else {
	const tempFunc = doT.template(templateMobile);
	const html = tempFunc(data);
	document.getElementById("modals-mobile").innerHTML = html;
}
