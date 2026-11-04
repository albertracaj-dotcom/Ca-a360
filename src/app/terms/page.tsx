import Link from "next/link";

export const metadata = { title: "Condicions d’ús | Caça 360" };

export default function TermsPage() {
  return <main className="page-wrap inner-page">
    <div className="page-intro"><div className="eyebrow dark">INFORMACIÓ LEGAL</div><h1>Condicions d’ús.</h1><p>Condicions bàsiques d’utilització de la versió de desenvolupament de Caça 360.</p></div>
    <section className="legal-content">
      <h2>Finalitat educativa</h2>
      <p>Caça 360 és una eina privada d’estudi i autoavaluació per preparar coneixements relacionats amb les proves teòriques de les llicències D i E. No substitueix la normativa oficial, la informació de l’autoritat competent ni la formació pràctica autoritzada.</p>
      <h2>Sense vinculació oficial</h2>
      <p>Caça 360 no és una aplicació oficial ni està afiliada, avalada o gestionada per la Guàrdia Civil, el Ministeri de l’Interior o cap altra administració pública.</p>
      <h2>Preguntes i continguts</h2>
      <p>Les preguntes pròpies estan identificades com a contingut original de Caça 360 i no s’han de confondre amb el banc oficial de preguntes. Els enllaços als qüestionaris oficials obren documents publicats per la Guàrdia Civil.</p>
      <h2>Vigència</h2>
      <p>La normativa i els procediments poden canviar. L’usuari ha de consultar sempre les fonts oficials i comprovar la versió vigent abans de prendre decisions o fer tràmits.</p>
      <h2>Ús responsable</h2>
      <p>Els materials són de caràcter teòric. No ofereixen autorització ni instruccions per utilitzar, modificar o manipular armes. Les activitats pràctiques s’han de fer únicament en instal·lacions i condicions legalment autoritzades.</p>
      <p className="legal-note">Condicions inicials per a una versió en desenvolupament. Cal revisió jurídica abans de la publicació comercial.</p>
    </section>
    <Link href="/" className="text-link">← Tornar a l’inici</Link>
  </main>;
}
