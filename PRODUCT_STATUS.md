# Caça 360 — estat del producte

## Objectiu
PWA en català per preparar la prova teòrica de les llicències D i E a Espanya, amb contingut basat en el programa publicat per la Guàrdia Civil.

## Programa oficial verificat
Font: [Guàrdia Civil — Programa de coneixements D, E i AEM](https://web.guardiacivil.es/es/tramites/autorizaciones-de-armas-y-explosivos/controldearmas/pruebas_licenciasarmas/Programa_prueba_teorica_D__E_y_AEM/).

Els set temes de l'app segueixen l'estructura oficial:
1. Funcionament de les armes; peces, mecanismes, conservació i seguretat.
2. Categories segons el Reglament d'Armes; semiautomàtiques, repetició i prohibides.
3. Circulació, revista i transferència.
4. Documentació, condicions de llicències, Targeta Europea i tràmits.
5. Règim sancionador, infraccions i retirada.
6. Reparació, prova i dipòsit.
7. Armes de col·lecció; articles 2 i 107; història, calibres, munició i pólvora.

La informació oficial consultada estableix 20 preguntes, 20 minuts i 16 respostes correctes com a mínim. La distribució de preguntes per tema que apareix a la pàgina suma 24, per tant no s'ha codificat com a regla de selecció.

## Banc de preguntes
El fitxer src/data/question-bank.ts conté preguntes originals de Caça 360, no el banc oficial de 400 preguntes. No s'han de presentar com preguntes oficials ni com una reproducció literal del qüestionari de la Guàrdia Civil.

La Guàrdia Civil publica els qüestionaris oficials per temes i indica que el banc té 400 preguntes i és de domini públic dels aspirants. Abans d'incorporar-les literalment cal verificar els documents, les respostes i la seva vigència.

## Estat tècnic
- Next.js 15 / React 19 / TypeScript.
- PWA amb manifest i service worker inicial.
- CI a GitHub Actions: lint i build.
- Progrés local al navegador pendent d'implementar.
- Autenticació, sincronització, administració i subscripcions pendents.
- Encara no desplegada en HTTPS; no instal·lable com a PWA real fins al desplegament.
