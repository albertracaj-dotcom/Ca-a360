# Caça 360

Aplicació web progressiva (PWA) en català per preparar la prova teòrica de les llicències d'armes D i E.

## Contingut actual
- Temari organitzat segons els set temes publicats per la Guàrdia Civil.
- Accés directe als qüestionaris oficials i als fulls de respostes oficials de cada tema.
- 35 preguntes originals de Caça 360, identificades com a contingut propi.
- Pràctica general i pràctica específica per tema.
- Simulacre de 20 preguntes, 20 minuts i llindar oficial de 16 respostes correctes.
- Correcció amb explicacions en mode pràctica.
- Historial local de fins a 20 proves, mitjana d'encerts i recompte total.
- Pàgina de fonts oficials i normativa.
- Pàgines inicials de privacitat i condicions d'ús.
- Manifest PWA, icones i cache bàsica del shell per a ús sense connexió després d'haver visitat l'app.

## Precisió i fonts
Programa oficial: [Guàrdia Civil — Programa de coneixements de la prova teòrica D, E i AEM](https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/).

La Guàrdia Civil indica 400 preguntes al banc oficial, 20 preguntes per prova, 20 minuts i un mínim de 16 encerts. La pàgina oficial publica també un repartiment temàtic que suma 24 preguntes, malgrat que l'examen consta de 20; Caça 360 no aplica aquest repartiment fins que es pugui aclarir.

**Les 35 preguntes pròpies de l'app no són preguntes oficials.** Els qüestionaris oficials i les seves respostes s'obren des dels enllaços publicats per la Guàrdia Civil. Les normes i els requisits poden canviar: comprova sempre el text consolidat i la data de vigència.

## Tecnologia
- Next.js 15.5.28, React 19.0.6 i TypeScript
- Node.js 22 per a CI i auditoria de dependències de producció
- PostCSS 8.5.32 forçat via override per corregir una dependència transitiva vulnerable
- PWA amb service worker
- GitHub Actions per executar ESLint i la compilació
- Progrés local al navegador (sense compte ni sincronització)

## Desenvolupament local
Requereix Node.js 22.

```bash
npm install
npm run dev
```

Obre http://localhost:3000.

Per validar:
```bash
npm run lint
npm run build
```

## Pendents abans d'una publicació real
- Validació experta i jurídica de totes les fitxes i preguntes originals.
- Completar els materials d'estudi desenvolupats per tema.
- Progrés detallat i sincronització d'usuari amb backend.
- Panell d'administració per revisar continguts i versions normatives.
- Revisió d'accessibilitat, proves en mòbil i dispositius reals.
- Desplegament HTTPS i verificació final d'instal·lació PWA.
- Revisió jurídica de les pàgines inicials de privacitat i condicions d'ús.
- Sistema de subscripció si s'activa el model freemium.

## Principis editorials
- No presentar preguntes pròpies com a oficials.
- Conservar font, tema i data de revisió de cada contingut.
- Revisar la vigència de les referències normatives.
- No oferir instruccions pràctiques de manipulació com a substitut de la formació presencial autoritzada.
