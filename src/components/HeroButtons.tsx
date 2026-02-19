"use client";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#download"
        className="h-12 inline-flex items-center justify-center rounded-lg px-6 font-semibold shadow-md hover:shadow-lg transition-all"
        style={{ backgroundColor: '#729387', color: '#FFFFFF' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5f7a70'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#729387'}
      >
        Get the App
      </a>
      <a
        href="#story"
        className="h-12 inline-flex items-center justify-center rounded-lg px-6 font-medium transition-all"
        style={{ backgroundColor: '#E8EDF3', color: '#1E293B', border: '1px solid rgba(180, 190, 207, 0.4)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#DAE7E1';
          e.currentTarget.style.borderColor = 'rgba(114, 147, 135, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#E8EDF3';
          e.currentTarget.style.borderColor = 'rgba(180, 190, 207, 0.4)';
        }}
      >
        Why We Built It
      </a>
    </div>
  );
}

