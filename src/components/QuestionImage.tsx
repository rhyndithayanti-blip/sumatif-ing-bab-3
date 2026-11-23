import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { QuestionDiagramType } from '../types';

interface QuestionImageProps {
  src?: string;
  diagramType?: QuestionDiagramType;
  caption?: string;
  alt: string;
  compact?: boolean;
}

const renderToyDiagram = (type: QuestionDiagramType) => {
  switch (type) {
    case 'toy_marbles_yoyo':
      return (
        <svg viewBox="0 0 420 200" className="w-full h-full" role="img" aria-label="Five colorful marbles on the left and one purple yo-yo on the right">
          <rect width="420" height="200" fill="#f8fafc" />
          {/* Left card: 5 Marbles */}
          <rect x="16" y="18" width="215" height="164" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* 5 Marbles (blue, red, green, yellow, purple) */}
          <g>
            <circle cx="62" cy="74" r="20" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
            <ellipse cx="55" cy="67" rx="6" ry="3.5" fill="#93c5fd" transform="rotate(-25 55 67)" />

            <circle cx="122" cy="74" r="20" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <ellipse cx="115" cy="67" rx="6" ry="3.5" fill="#fecaca" transform="rotate(-25 115 67)" />

            <circle cx="182" cy="74" r="20" fill="#10b981" stroke="#065f46" strokeWidth="2" />
            <ellipse cx="175" cy="67" rx="6" ry="3.5" fill="#a7f3d0" transform="rotate(-25 175 67)" />

            <circle cx="92" cy="132" r="20" fill="#facc15" stroke="#a16207" strokeWidth="2" />
            <ellipse cx="85" cy="125" rx="6" ry="3.5" fill="#fef08a" transform="rotate(-25 85 125)" />

            <circle cx="152" cy="132" r="20" fill="#f97316" stroke="#9a3412" strokeWidth="2" />
            <ellipse cx="145" cy="125" rx="6" ry="3.5" fill="#fed7aa" transform="rotate(-25 145 125)" />
          </g>

          {/* Right card: 1 Purple Yo-yo */}
          <rect x="248" y="18" width="156" height="164" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M 326 42 Q 345 28 360 46 Q 368 62 350 76" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="326" cy="108" r="36" fill="#9333ea" stroke="#581c87" strokeWidth="2.5" />
          <circle cx="326" cy="108" r="22" fill="#c084fc" stroke="#6b21a8" strokeWidth="1.5" />
          <circle cx="326" cy="108" r="7" fill="#faf5ff" stroke="#581c87" strokeWidth="1.5" />
        </svg>
      );

    case 'color_toys_row':
      return (
        <svg viewBox="0 0 420 200" className="w-full h-full" role="img" aria-label="Four colorful toys: orange basketball, purple yo-yo, black-and-white soccer ball, and pink scooter">
          <rect width="420" height="200" fill="#f8fafc" />

          {/* 1. Orange Basketball */}
          <rect x="14" y="28" width="90" height="144" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="59" cy="100" r="28" fill="#f97316" stroke="#9a3412" strokeWidth="2" />
          <line x1="31" y1="100" x2="87" y2="100" stroke="#7c2d12" strokeWidth="1.8" />
          <line x1="59" y1="72" x2="59" y2="128" stroke="#7c2d12" strokeWidth="1.8" />
          <path d="M 41 79 Q 55 100 41 121" fill="none" stroke="#7c2d12" strokeWidth="1.8" />
          <path d="M 77 79 Q 63 100 77 121" fill="none" stroke="#7c2d12" strokeWidth="1.8" />

          {/* 2. Purple Yo-yo */}
          <rect x="114" y="28" width="90" height="144" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M 159 68 Q 178 46 188 66" fill="none" stroke="#64748b" strokeWidth="2" />
          <circle cx="159" cy="104" r="26" fill="#9333ea" stroke="#581c87" strokeWidth="2" />
          <circle cx="159" cy="104" r="14" fill="#d8b4fe" stroke="#6b21a8" strokeWidth="1.5" />
          <circle cx="159" cy="104" r="4" fill="#ffffff" />

          {/* 3. Black & White Soccer Ball */}
          <rect x="214" y="28" width="90" height="144" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="259" cy="100" r="28" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <polygon points="259,89 269,96 265,108 253,108 249,96" fill="#0f172a" />
          <line x1="259" y1="89" x2="259" y2="72" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="269" y1="96" x2="285" y2="90" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="265" y1="108" x2="275" y2="122" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="253" y1="108" x2="243" y2="122" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="249" y1="96" x2="233" y2="90" stroke="#0f172a" strokeWidth="1.5" />

          {/* 4. Pink Scooter */}
          <rect x="314" y="28" width="92" height="144" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="336" y1="126" x2="380" y2="126" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          <line x1="376" y1="126" x2="368" y2="68" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" />
          <line x1="358" y1="68" x2="378" y2="68" stroke="#9d174d" strokeWidth="4" strokeLinecap="round" />
          <circle cx="336" cy="133" r="8" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="382" cy="133" r="8" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        </svg>
      );

    case 'color_toy_cars':
      return (
        <svg viewBox="0 0 420 185" className="w-full h-full" role="img" aria-label="Three toy cars: one red car, one blue car, and one green car">
          <rect width="420" height="185" fill="#f8fafc" />
          {/* Track line */}
          <line x1="16" y1="142" x2="404" y2="142" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />

          {/* Car 1: Red */}
          <g transform="translate(26, 68)">
            <path d="M 16 32 L 28 10 L 68 10 L 82 32 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <rect x="4" y="32" width="96" height="28" rx="8" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <rect x="30" y="15" width="16" height="15" rx="2" fill="#fee2e2" />
            <rect x="51" y="15" width="16" height="15" rx="2" fill="#fee2e2" />
            <circle cx="26" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="26" cy="62" r="4" fill="#cbd5e1" />
            <circle cx="78" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="78" cy="62" r="4" fill="#cbd5e1" />
          </g>

          {/* Car 2: Blue */}
          <g transform="translate(158, 68)">
            <path d="M 16 32 L 28 10 L 68 10 L 82 32 Z" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
            <rect x="4" y="32" width="96" height="28" rx="8" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
            <rect x="30" y="15" width="16" height="15" rx="2" fill="#dbeafe" />
            <rect x="51" y="15" width="16" height="15" rx="2" fill="#dbeafe" />
            <circle cx="26" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="26" cy="62" r="4" fill="#cbd5e1" />
            <circle cx="78" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="78" cy="62" r="4" fill="#cbd5e1" />
          </g>

          {/* Car 3: Green */}
          <g transform="translate(290, 68)">
            <path d="M 16 32 L 28 10 L 68 10 L 82 32 Z" fill="#10b981" stroke="#065f46" strokeWidth="2" />
            <rect x="4" y="32" width="96" height="28" rx="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />
            <rect x="30" y="15" width="16" height="15" rx="2" fill="#d1fae5" />
            <rect x="51" y="15" width="16" height="15" rx="2" fill="#d1fae5" />
            <circle cx="26" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="26" cy="62" r="4" fill="#cbd5e1" />
            <circle cx="78" cy="62" r="11" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="78" cy="62" r="4" fill="#cbd5e1" />
          </g>
        </svg>
      );

    case 'toy_box_colors':
      return (
        <svg viewBox="0 0 420 205" className="w-full h-full" role="img" aria-label="A toy box holding a brown teddy bear, a red drum, and a blue toy boat">
          <rect width="420" height="205" fill="#fffbeb" />
          {/* Wooden Toy Box container */}
          <rect x="30" y="96" width="360" height="86" rx="10" fill="#fde68a" stroke="#b45309" strokeWidth="2.5" />
          <line x1="30" y1="116" x2="390" y2="116" stroke="#d97706" strokeWidth="2" />

          {/* 1. Brown Teddy Bear */}
          <g transform="translate(95, 58)">
            <circle cx="-18" cy="-12" r="9" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
            <circle cx="18" cy="-12" r="9" fill="#92400e" stroke="#451a03" strokeWidth="1.5" />
            <circle cx="0" cy="4" r="22" fill="#b45309" stroke="#451a03" strokeWidth="1.5" />
            <ellipse cx="0" cy="9" rx="10" ry="7" fill="#fef3c7" />
            <circle cx="-8" cy="0" r="2.5" fill="#1e293b" />
            <circle cx="8" cy="0" r="2.5" fill="#1e293b" />
            <ellipse cx="0" cy="6" rx="3.5" ry="2.5" fill="#451a03" />
            <ellipse cx="0" cy="36" rx="22" ry="18" fill="#b45309" stroke="#451a03" strokeWidth="1.5" />
          </g>

          {/* 2. Red Drum */}
          <g transform="translate(210, 62)">
            <rect x="-28" y="4" width="56" height="42" rx="4" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <ellipse cx="0" cy="4" rx="28" ry="8" fill="#fef2f2" stroke="#991b1b" strokeWidth="2" />
            <polyline points="-26,8 -13,44 0,8 13,44 26,8" fill="none" stroke="#fde047" strokeWidth="2" />
            <line x1="-22" y1="-12" x2="-4" y2="2" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-22" cy="-12" r="3.5" fill="#facc15" />
            <line x1="22" y1="-12" x2="4" y2="2" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            <circle cx="22" cy="-12" r="3.5" fill="#facc15" />
          </g>

          {/* 3. Blue Toy Boat */}
          <g transform="translate(322, 66)">
            <line x1="0" y1="-28" x2="0" y2="18" stroke="#475569" strokeWidth="3" />
            <polygon points="2,-26 2,8 26,8" fill="#ffffff" stroke="#1e40af" strokeWidth="1.5" />
            <polygon points="-2,-20 -2,8 -20,8" fill="#dbeafe" stroke="#1e40af" strokeWidth="1.5" />
            <polygon points="-32,18 32,18 22,40 -22,40" fill="#2563eb" stroke="#1e3a8a" strokeWidth="2" />
          </g>

          {/* Front rim overlap */}
          <rect x="30" y="100" width="360" height="82" rx="8" fill="#f59e0b" fillOpacity="0.88" stroke="#b45309" strokeWidth="2.5" />
          <rect x="140" y="128" width="140" height="26" rx="6" fill="#fffbeb" stroke="#b45309" strokeWidth="1.5" />
          <text x="210" y="145" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            TOY BOX
          </text>
        </svg>
      );
  }
};

export const QuestionImage: React.FC<QuestionImageProps> = ({
  src,
  diagramType,
  caption,
  alt,
  compact = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src && !diagramType) return null;

  return (
    <figure
      className={`mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 ${
        compact ? 'max-w-xs' : 'max-w-md'
      }`}
    >
      {diagramType ? (
        <div className="w-full bg-white flex items-center justify-center overflow-hidden p-2">
          {renderToyDiagram(diagramType)}
        </div>
      ) : !hasError && src ? (
        <div className="aspect-[4/3] w-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center justify-center p-4 text-center gap-2 text-slate-600">
          <ImageIcon className="w-8 h-8 text-blue-600" />
          <span className="text-xs font-semibold">{alt}</span>
        </div>
      )}
      {caption && (
        <figcaption className="px-3 py-2 text-[11px] text-slate-600 bg-slate-50 border-t border-slate-200 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
