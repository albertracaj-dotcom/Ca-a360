import Link from "next/link";

export const metadata = { title: "Privacitat | Caça 360" };

export default function PrivacyPage() {
  return <main className="page-wrap inner-page">
    <div className="page-intro"><div className="eyebrow dark">INFORMACIÓ LEGAL</div><h1>Privacitat.</h1><p>Informació sobre les dades que tracta aquesta versió de Caça 360.</p></div>
    <section className="legal-content">
      <h2>Quines dades es guarden?</h2>
      <p>Aquesta versió no requereix registre ni envia les respostes dels tests a cap servei propi. El recompte de proves i l’historial de resultats s’emmagatzemen localment al navegador del dispositiu mitjançant localStorage.</p>
      <h2>Com es poden esborrar?</h2>
      <p>Pots reiniciar el recompte des de la pantalla «El meu progrés» o esborrar les dades del lloc des de la configuració del navegador. Si desinstal·les l’aplicació o esborres les dades del navegador, pots perdre aquest historial.</p>
      <h2>Recursos i enllaços externs</h2>
      <p>La interfície carrega tipografies de Google Fonts i una imatge de Unsplash, que poden rebre dades tècniques de connexió quan es descarreguen aquests recursos. L’aplicació també enllaça amb webs oficials de la Guàrdia Civil i del BOE; quan obres aquests enllaços, s’apliquen les polítiques de privacitat dels seus titulars.</p>
      <h2>Canvis futurs</h2>
      <p>Si s’incorporen comptes d’usuari, sincronització, analítica o pagaments, aquesta política s’haurà d’actualitzar abans d’activar aquestes funcions.</p>
      <p className="legal-note">Versió inicial de desenvolupament. No és assessorament jurídic ni una política revisada per un professional de protecció de dades.</p>
    </section>
    <Link href="/" className="text-link">← Tornar a l’inici</Link>
  </main>;
}
