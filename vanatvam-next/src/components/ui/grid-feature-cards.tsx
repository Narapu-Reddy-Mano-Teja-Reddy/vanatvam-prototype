import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	const p = genRandomPattern();

	return (
		<div
      className={cn('relative overflow-hidden', className)}
      {...props}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.04)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
			<GridPattern
				width={20}
				height={20}
				x="-12"
				y="4"
				squares={p}
				style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '65%',
          height: '100%',
          color: 'var(--accent-gold)',
          opacity: 0.1,
          maskImage: 'radial-gradient(ellipse at top right, white, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, white, transparent 70%)',
          pointerEvents: 'none',
        }}
			/>
			<div style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(198,162,101,0.1)', color: 'var(--accent-gold)' }}>
				<feature.icon className="size-8" strokeWidth={1.5} aria-hidden />
			</div>
			<h3 style={{ position: 'relative', zIndex: 1, marginTop: '24px', fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--bg-dark-forest)' }}>{feature.title}</h3>
			<p style={{ position: 'relative', zIndex: 1, marginTop: '12px', fontSize: '1rem', lineHeight: 1.65, fontWeight: 300, color: 'var(--text-muted)' }}>{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	style,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props} style={style}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" stroke="currentColor" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} fill="currentColor" />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	// Return a deterministic fixed pattern to avoid hydration mismatch
	const basePattern = [
		[7, 2],
		[8, 4],
		[9, 1],
		[10, 5],
		[7, 6],
		[8, 2],
		[9, 5]
	];
	return basePattern.slice(0, length);
}
