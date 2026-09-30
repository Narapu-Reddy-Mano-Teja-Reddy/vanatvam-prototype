export function generateStaticParams() {
  return [
    { id: 'sustainable-farming-future' },
    { id: 'wildlife-corridors-bandipur' },
    { id: 'nakshatra-vana-ancient-wisdom' }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
