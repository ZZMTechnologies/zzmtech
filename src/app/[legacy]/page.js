import LegacyRedirect from './LegacyRedirect';

// Old classic-site URLs (archived in archieve/nextjs-classic) forward to the matching
// panel on the 3D home page so existing links and search results keep working.
const LEGACY_ROUTES = {
  aboutus: 'about',
  accreditation: 'about',
  testimonial: 'about',
  casestudy: 'about',
  project: 'about',
  publication: 'about',
  team: 'team',
  ourclient: 'clients',
  workmethodology: 'process',
  contact: 'contact',
  digitalconsultancy: 'services',
  web: 'services',
  backend: 'services',
  frontend: 'services',
  api: 'services',
  mobile: 'services',
  blockchain: 'services',
  cloudcomputing: 'services',
  cybersecurity: 'services',
  devsecops: 'services',
  ai: 'services',
  iot: 'services',
  microservice: 'services'
};

export async function generateStaticParams() {
  return Object.keys(LEGACY_ROUTES).map((legacy) => ({ legacy }));
}

export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: '/' }
};

export default function LegacyPage({ params }) {
  return <LegacyRedirect to={`/#${LEGACY_ROUTES[params.legacy]}`} />;
}
