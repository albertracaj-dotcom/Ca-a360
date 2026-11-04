export const topics = [
 {id:1,title:"Funcionament de les armes",subtitle:"Peces, mecanismes, conservació i seguretat",description:"Funcionament general, peces fonamentals, mecanismes de dispar i seguretat, conservació i neteja, i mesures de seguretat en la tinença."},
 {id:2,title:"Categories i tipus d'armes",subtitle:"Classificació segons el Reglament d'Armes",description:"Categories d'armes segons el Reglament d'Armes vigent, armes semiautomàtiques, armes de repetició i armes prohibides."},
 {id:3,title:"Circulació i transferència",subtitle:"Circulació, revista i transferència",description:"Condicions reglamentàries de circulació, revista d'armes i transferència de titularitat."},
 {id:4,title:"Documentació i llicències",subtitle:"Tinença, ús, llicències i tràmits",description:"Documentació per a la tinença i ús d'armes, condicions generals per obtenir llicències i Targeta Europea d'Armes de Foc, i tramitació de sol·licituds."},
 {id:5,title:"Règim sancionador",subtitle:"Infraccions i retirada d'armes",description:"Règim sancionador, infraccions molt greus, greus i lleus, i retirada de les armes."},
 {id:6,title:"Reparació, prova i dipòsit",subtitle:"Intervencions i custòdia reglada",description:"Reparació d'armes, prova d'armes i dipòsit d'armes."},
 {id:7,title:"Col·lecció i conceptes tècnics",subtitle:"Definicions, història, calibres i munició",description:"Armes de col·lecció, definicions dels articles 2 i 107 del Reglament d'Armes, història de les armes de foc, calibres, munició i pólvora."}
] as const;
export const officialProgram = {
 authority:"Dirección General de la Guardia Civil",
 basis:"Annex I de la Resolució de 19 d'octubre de 1998",
 sourceUrl:"https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/",
 exam:{questions:20,minutes:20,minimumCorrect:16},
 distributionNote:"La pàgina oficial consultada publica una distribució temàtica que suma 24 preguntes tot i indicar que l'exercici en té 20. Caça 360 no aplicarà aquest repartiment fins que l'autoritat el clarifiqui."
} as const;
