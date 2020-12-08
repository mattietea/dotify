import { exec } from 'child_process';
import fs from 'fs';

import React, { useEffect, useState } from 'react';

export const App = (): JSX.Element => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    exec('defaults read NSGlobalDomain KeyRepeat', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);

        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);

        return;
      }

      console.log(`stdout: ${stdout}`);
      setValue(Number(stdout));
    });
  }, []);

  return (
    <div>
      <label>
        Key Repeat
        <input
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
          type="number"
          value={value}
        />
      </label>
    </div>
  );
};
