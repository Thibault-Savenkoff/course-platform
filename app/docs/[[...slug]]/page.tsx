import Link, { type LinkProps } from 'next/link';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Pour commencer
      </h1>
      <p className="text-fd-muted-foreground">
        Choisissez l’année scolaire.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Item href="/docs/2024">
          <h2 className="mt-1 text-2xl font-semibold">2024-2025</h2>
        </Item>
        <Item href="/docs/2025">
          <h2 className="mt-1 text-2xl font-semibold">2025-2026</h2>
        </Item>
      </div>
    </main>
  );
}

function Item(
  props: LinkProps & { children: React.ReactNode },
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-12 shadow-lg transition-all hover:shadow-fd-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {props.children}
    </Link>
  );
}