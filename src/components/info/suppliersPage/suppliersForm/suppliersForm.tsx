import * as yup from 'yup';
import cn from 'classnames';
import styled from 'styled/styled';
import Input from 'ui-kit/input/input';
import Button from 'ui-kit/button/button';
import React, { FC, useState } from 'react';
import { postForm } from 'api/integration-api';
import TextArea from 'ui-kit/textArea/textarea';
import Checkbox from 'ui-kit/checkbox/checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import ChooseFile from 'ui-kit/chooseFile/chooseFile';
import { useForm, SubmitHandler } from 'react-hook-form';

interface StyleSuppliersForm {
  className: string;
}

const StyledSuppliersForm = styled.div<StyleSuppliersForm>`
  margin-bottom: 40px;
  padding: 0;

  .container-form {
    margin: 0 40px;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin: 0 10px;
      flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin: 0;
      border-radius: 0;
    }
  }

  .suppliers-header {
    margin-top: 30px;
    min-width: 250px;
    ${({ theme }) => theme.typography.text55x60};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 0;
      ${({ theme }) => theme.typography.text30x30};
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }

  .suppliers-form__container {
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      flex-direction: row;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .suppliers-form__title {
    margin-bottom: 32px;
    ${({ theme }) => theme.typography.text30x30};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .suppliers-form__textarea {
    margin-top: 15px;
  }

  .suppliers-form {
    padding: 77px 127px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 53px;
      padding: 0;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 10px;
    }
  }

  .suppliers-form__input {
    :not(:first-of-type) {
      margin-top: 15px;
    }
    width: 500px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      width: auto;
    }
  }

  .suppliers-form__file-input {
    margin: 30px 0;
  }

  .suppliers-form__textarea {
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin: 0;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 15px;
    }
  }

  .suppliers-form__checkbox {
    margin-right: 15px;
  }

  .suppliers-form__agree {
    margin-top: 70px;
    display: flex;
    align-items: baseline;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 40px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 15px;
      align-items: start;
    }
  }

  .suppliers-form__submit {
    margin-top: 21px;
    height: auto;
    padding: 18px 40px;
    border-radius: 18px;
    ${({ theme }) => theme.typography.text18x20};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 18px 40px;
    }
  }

  .suppliers-form__content-bottom,
  .suppliers-form__content-top {
    flex-basis: 50%;
    margin-right: 20px;
  }

  .error__form {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.typography.text12x15};
  }
`;

type Value = {
  name: string;
  email: string;
  phone: string;
  city: string;
  comments: string;
  files: File[];
};

export type DataType = {
  [key: string]: string;
};

const FILE_SIZE = 20 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/gif',
  'image/png',
  'image/bmp',
  'text/plain',
  'image/jpeg',
  'image/webp',
  'application/pdf',
  'application/zip',
  'application/msword',
  'application/vnd.rar',
  'application/vnd.ms-excel',
  'application/x-7z-compressed',
  'application/vnd.ms-powerpoint',
  'application/vnd.oasis.opendocument.text',
  'application/vnd.oasis.opendocument.spreadsheet',
  'application/vnd.oasis.opendocument.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

const schema = yup.object().shape({
  name: yup.string().required('Введите свое имя'),
  phone: yup
    .string()
    .matches(
      /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
      'Некорректный номер телефона',
    )
    .required('Введите свой номер телефона'),
  email: yup
    .string()
    .email('Некорректный Email')
    .required('Введите свой Email'),
  files: yup
    .mixed()
    .test(
      'fileSize',
      'File too large',
      (value) => (value[0] && value[0].size <= FILE_SIZE) || !value[0],
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) =>
        (value[0] && SUPPORTED_FORMATS.includes(value[0].type)) || !value[0],
    ),
});

const SuppliersForm: FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const { register, handleSubmit, errors } = useForm<Value>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Value> = async ({
    name,
    email,
    phone,
    city,
    comments,
    files,
  }) => {
    if (!disabled) {
      try {
        const data: DataType = {
          full_name: name,
          email,
          phone,
          city,
          comment: comments,
          accept: 'true',
        };
        const fd = new FormData();
        Object.keys(data).forEach((el) => data[el] && fd.append(el, data[el]));
        [...files].forEach((file) => fd.append('docs[]', file));
        const res = await postForm(fd);
        res && alert('Ваша заявка успешно отправлена');
      } catch (e) {
        console.log(e);
        alert('Произошла ошибка при отправке формы');
      }
    }
    return null;
  };
  return (
    <StyledSuppliersForm className="wrapper">
      <div className="container-form" id="form">
        <p className="suppliers-header">Станьте нашим поставщиком</p>
        <form onSubmit={handleSubmit(onSubmit)} className="suppliers-form">
          <p className="suppliers-form__title">Данные получателя</p>
          <div className="suppliers-form__container">
            <div className="suppliers-form__content-top">
              <Input
                className="suppliers-form__input"
                theme="grey"
                isError={Boolean(errors.name)}
                placeholder="ФИО"
                name="name"
                ref={register}
              />
              {errors.name && (
                <p className="error__form">{errors.name?.message}</p>
              )}
              <Input
                className="suppliers-form__input"
                theme="grey"
                isError={Boolean(errors.email)}
                placeholder="Электронная почта"
                name="email"
                ref={register}
              />
              {errors.email && (
                <p className="error__form">{errors.email?.message}</p>
              )}
              <Input
                className={cn('suppliers-form__input', {
                  ['suppliers-form__input--error']: errors.phone,
                })}
                theme="grey"
                isError={Boolean(errors.phone)}
                placeholder="Телефон"
                name="phone"
                ref={register}
              />
              {errors.phone && (
                <p className="error__form">{errors.phone?.message}</p>
              )}
              <Input
                className="suppliers-form__input"
                theme="grey"
                placeholder="Ваш город"
                name="city"
                ref={register}
              />
            </div>
            <div className="suppliers-form__content-bottom">
              <TextArea
                className="suppliers-form__textarea"
                placeholder="Комментарии"
                name="comments"
                ref={register}
              />
              <ChooseFile
                className="suppliers-form__file-input"
                ref={register}
                name="files"
                multiple
                onChange={(e) => console.log(e.target.files)}
              />
            </div>
          </div>
          <div>
            <div className="suppliers-form__agree">
              <Checkbox
                className="suppliers-form__checkbox"
                onChange={() => setDisabled(!disabled)}
                checked={!disabled}
              />
              <p>
                Я согласен на обработку <a href="#">персональных данных</a>
              </p>
            </div>
            <Button
              type="submit"
              disabled={disabled}
              className="suppliers-form__submit">
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </StyledSuppliersForm>
  );
};

export default SuppliersForm;
