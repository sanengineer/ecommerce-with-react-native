import { useState } from 'react';

const useForm = intitialValue => {
  const [form, setForm] = useState(intitialValue);

  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(intitialValue);
      }

      return setForm({ ...form, [formType]: formValue });
    },
  ];
};

export default useForm;
