# Caça 360 — estat del producte

Actualitzat: 4 de novembre de 2026.

## Abast
PWA en català per preparar la prova teòrica de les llicències d'armes D i E. El projecte es manté íntegrament al repositori GitHub; no s'ha connectat Google Play, Vercel ni cap servei de desplegament extern.

## Programa oficial verificat
Font principal: [Guàrdia Civil — Programa de coneixements D, E i AEM](https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/).

Els set temes de l'app segueixen l'estructura oficial:
1. Funcionament de les armes; peces, mecanismes, conservació i seguretat.
2. Categories segons el Reglament d'Armes; semiautomàtiques, repetició i prohibides.
3. Circulació, revista i transferència.
4. Documentació, condicions de llicències, Targeta Europea i tràmits.
5. Règim sancionador, infraccions i retirada.
6. Reparació, prova i dipòsit.
7. Armes de col·lecció; articles 2 i 107; història, calibres, munició i pólvora.

La informació oficial consultada indica 20 preguntes, 20 minuts i 16 encerts mínims. La distribució de preguntes per tema que apareix a la pàgina suma 24; per això no s'aplica com a regla del simulacre.

## Funcions implementades
- Inici i navegació adaptada a mòbil i ordinador.
- Set temes amb objectius, resums, punts clau i llista de comprovació.
- Enllaços directes als qüestionaris i fulls de respostes oficials per tema.
- 35 preguntes originals de Caça 360, cinc per tema.
- Pràctica general i pràctica específica per tema.
- Simulacre de 20 preguntes amb temporitzador de 20 minuts, llindar de 16 encerts, possibilitat de deixar en blanc, tornar enrere i canviar respostes.
- Resultats i revisió final de les respostes del simulacre.
- Historial local de fins a 20 proves, mitjana d'encerts, recompte total i estadístiques de pràctica per tema.
- Pàgina de fonts oficials i enllaços al BOE.
- Pàgines inicials de privacitat i condicions d'ús.
- PWA amb manifest, icones PNG de 192/512 px, icona Apple Touch i cache bàsica del shell per recuperar la pàgina inicial després d'haver-la visitat.
- GitHub Actions amb Node.js 22, auditoria de dependències de producció, ESLint i compilació.

## Límits coneguts
- Les 35 preguntes pròpies no són les 400 preguntes oficials. Els qüestionaris oficials s'obren des dels PDF de la Guàrdia Civil.
- Els resums són material d'orientació; encara necessiten revisió experta i ampliació amb referències legals article per article.
- El progrés es desa només al navegador. No hi ha comptes, sincronització ni subscripció.
- El mode offline és parcial; no garanteix que totes les pantalles i continguts estiguin disponibles sense xarxa.
- No hi ha desplegament HTTPS, per tant encara no es pot instal·lar i provar com a PWA en dispositius reals.
- Les pàgines de privacitat i condicions són esborranys i necessiten revisió jurídica abans d'una publicació comercial.

## Validació tècnica
GitHub Actions ha completat correctament l’auditoria de dependències de producció, ESLint i la compilació Next.js al commit 7740bfc0cd5be223e5e4070ac82fd971ea53a16e.

## Següents fites abans de dir que està llesta
1. [x] Execució verda de l’auditoria de dependències, ESLint i build a GitHub Actions.
2. Completar la revisió jurídica i editorial dels resums i les 35 preguntes.
3. Afegir més preguntes pròpies verificades o una importació controlada del material oficial publicat.
4. Fer proves funcionals completes en mòbil i ordinador.
5. Millorar el suport offline i verificar instal·lació PWA amb HTTPS.
6. Tancar privacitat, condicions d'ús i accessibilitat.
7. Decidir, més endavant, si cal compte d'usuari, sincronització i model freemium.

## Principis editorials
- No presentar preguntes pròpies com a oficials.
- Conservar font, tema i data de revisió de cada contingut.
- Comprovar la vigència de les referències normatives.
- No substituir la formació pràctica autoritzada per contingut digital.
