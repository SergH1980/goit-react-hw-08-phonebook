import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const toChangeVisibility = () => setVisible(visible => !visible);

  const Icon = visible ? (
    <AiFillEyeInvisible onClick={toChangeVisibility} color="grey" />
  ) : (
    <AiFillEye onClick={toChangeVisibility} color="grey" />
  );

  const InputType = visible ? `text` : `password`;

  return [InputType, Icon];
};

export default usePasswordToggle;
