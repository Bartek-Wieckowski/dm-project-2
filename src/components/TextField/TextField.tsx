// import { HTMLInputTypeAttribute } from 'react';
// import { Controller, FieldValues, Path, PathValue } from 'react-hook-form';
// import { InputProps, SxProps } from '@mui/material';
// import TextField, { TextFieldVariants } from '@mui/material/TextField';

// import { BaseInputProps } from '../types';

// import styles from './TextField.module.scss';

// type FormInputProps<T extends FieldValues> = {
//   column?: boolean;
//   defaultValue: PathValue<T, Path<T>> | undefined;
//   disabled?: boolean;
//   placeholder?: string;
//   props?: InputProps;
//   size?: 'small' | 'medium';
//   sx?: SxProps;
//   type?: HTMLInputTypeAttribute;

//   variant?: TextFieldVariants;
// } & BaseInputProps<T>;

// export const TextFieldInput = <T extends FieldValues>({
//   name,
//   control,
//   label,
//   defaultValue,
//   variant,
//   type = 'text',
//   size = 'small',
//   placeholder,
//   sx,
//   column = false,
//   disabled = false,
//   props,
// }: FormInputProps<T>) => (
//   <Controller
//     name={name}
//     control={control}
//     defaultValue={defaultValue}
//     render={({
//       field: { onChange, value },
//       fieldState: { error },
//       formState: { touchedFields },
//     }) => (
//         <TextField
//           id={name}
//           helperText={error ? error.message : null}
//           error={touchedFields && !!error}
//           onChange={onChange}
//           placeholder={placeholder}
//           disabled={disabled}
//           value={value && value.trim()}
//           type={type}
//         />)}
//   />
// );