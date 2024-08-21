import React from 'react'
import Image from "next/image";
import { FormControl, FormField, FormLabel, FormMessage, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import ReactDatePicker from "react-datepicker";
import { authFormSchema } from '@/lib/utils'

export enum  FormFieldType {
  INPUT = "input",
  DATE_PICKER = "datePicker",
}

const formSchema = authFormSchema('sign-up')

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  fieldType: FormFieldType;
  dateFormat?: string;
}

const RenderField = ({ field,props}: {field: any; props: CustomInput }) => {
  const { name } = props;
  switch (props.fieldType) {
    case FormFieldType.INPUT:
    return (
    <FormControl>
     <Input
     placeholder={props.placeholder}
      className="input-class"
      type={name === 'password' ? 'password' : 'text'}
     {...field}
     /> 
     </FormControl>  
    )
      
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
        <Image
        src="/icons/calendar.svg"
        height={24}
        width={24}
        alt="user"
        className="ml-2"
      />
            <FormControl>
          <ReactDatePicker
            selected={field.value}
            onChange={(date: Date) => field.onChange(date)}
            dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
            wrapperClassName="date-picker"
          />
        </FormControl>
        </div>
      )
  
    default:
      return null;
  }
}

const CustomInput = (props: CustomInput) => {
  const { control, name, label, fieldType, placeholder } = props;
  return (
    <FormField
    control={props.control}
    name={props.name}
    render={({ field }) => (
     <FormItem className="form-item">
       {fieldType !== FormFieldType.CHECKBOX && label && (
    <FormLabel className="form-label">{label}</FormLabel>
  )}
     <RenderField field={field} props={props} />
     <FormMessage className="form-message mt-2" />
     </FormItem>
   )}
    />
  )
}

export default CustomInput