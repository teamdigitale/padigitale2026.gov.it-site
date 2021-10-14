import { Input } from 'design-react-kit';
import { useForm, Controller } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

// CHANGEME use ENV var
const URL_SUBMIT = 'https://google.com';

const objToQueryString = (obj) => {
  const keyValuePairs = [];
  Object.keys(obj).map((x) => {
    keyValuePairs.push(encodeURIComponent(x) + '=' + encodeURIComponent(obj[x]));
  });
  return keyValuePairs.join('&');
};

export const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const firstname = watch('firstname');
  const { lastname, email } = watch(['lastname', 'email']);
  const [isFirstnameValid, setIsFirstnameValid] = useState(false);
  const [isLastnameValid, setIsLastnameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    setIsFirstnameValid(firstname || firstname?.length === 0 || errors.firstname);
    setIsLastnameValid(lastname || lastname?.length === 0 || errors.lastname);
    setIsEmailValid(email || email?.length === 0 || errors.email);
  }, [errors.firstname, firstname, lastname, email, errors.lastname, errors.email]);

  const onSubmit = async (data) => {
    console.log(data);
    const requestOptions = {
      method: 'GET',
    };
    const queryString = objToQueryString(data);
    const response = await fetch(`${URL_SUBMIT}?${queryString}`, requestOptions);
    const res = response.status;
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="list" value="1" {...register('list', { required: true })} />
      <input type="hidden" name="group" value="6" {...register('group', { required: true })} />
      <div className="m-5 p-3">
        <div className="form-row">
          <div className="form-group col-md-6">
            {/* Using Controller for HOC component */}
            <Controller
              name="firstname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  valid={isFirstnameValid}
                  invalid={errors.firstname}
                  infoText={errors.firstname && 'Questo campo è richiesto'}
                  label="NOME*"
                  type="text"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group col-md-6">
            <Controller
              name="lastname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  valid={isLastnameValid}
                  invalid={errors.lastname}
                  infoText={errors.lastname && 'Questo campo è richiesto'}
                  label="COGNOME*"
                  type="text"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  valid={isEmailValid}
                  invalid={errors.email}
                  infoText={errors.email && 'Questo campo è richiesto'}
                  label="EMAIL"
                  type="email"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="form-row"></div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <h4>INTERESSATA/O AGLI INVESTIMENTI</h4>
            <div className="toggles">
              <label htmlFor="infrastrutture_digitali" className="active">
                1.1 Infrastrutture digitali*
                <input
                  name="toggle"
                  type="checkbox"
                  id="infrastrutture_digitali"
                  {...register('infrastrutture_digitali')}
                />
                <span className="lever"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col text-center">
            <button type="button" onClick={() => reset()} className="btn btn-outline-primary">
              Annulla
            </button>{' '}
            <button type="submit" className="btn btn-primary">
              INVIA
            </button>{' '}
            <a href="#">Aggiungi un messaggio</a>
          </div>
        </div>
      </div>
    </form>
  );
};
