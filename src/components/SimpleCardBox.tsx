import React from 'react';


type Props = {
    value: number
    title?: string
    suffix?: string
  }

function SimpleCardBox({ title = '', value, suffix='' }: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            {title}
        </div>
        <p className="text-blue-600 text-base font-semibold">
          {value} {suffix}
        </p>
      </div>
    </div>
  );
}

export default SimpleCardBox;
