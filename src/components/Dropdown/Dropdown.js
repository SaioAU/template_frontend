import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ options, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        {open &&
          options.map(({ label, url, onClick }) => {
            if (url) {
              return (
                <Link onClick={() => setOpen(false)} key={label} to={url}>
                  {label}
                </Link>
              );
            }

            return (
              <button
                type="button"
                key={label}
                onClick={() => {
                  setOpen(false);
                  if (onClick) onClick();
                }}
              >
                {label}
              </button>
            );
          })}
      </div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)}>
          {title}
        </button>
      )}
    </div>
  );
};

export default Dropdown;
