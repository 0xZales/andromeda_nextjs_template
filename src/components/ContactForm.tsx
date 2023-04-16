'use client'
import { FC } from 'react';
import * as Form from '@radix-ui/react-form';
import Paragraph from './ui/Paragraph';
import Button from './ui/Button';
interface ContactFormProps {

};

const ContactForm: FC<ContactFormProps> = ({ }) => {
  return (
    <Form.Root className='lg:w-1/2 lg:p-44 p-3'>
      <Paragraph className='text-left' size='md'>
        Send a message
      </Paragraph>
      <Form.Field className="grid mb-[10px]" name="text">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Name</Form.Label>

        </div>
        {/* */}
        <Form.Control asChild>
          <input
            className=" mb-5 leading-10 border-primary  border-2 border-transparent bg-theme-light  border-l-primary  border-t-0 border-r-0 border-b-0 focus:border-primary focus:border focus:ring-transparent py-2 rounded-lg focus:border-t focus:border-l focus:border-b focus:border-r  outline-none p-4"
            placeholder='Full Name'
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="text">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Email</Form.Label>

        </div>
        <Form.Control asChild>
          <input
            className=" mb-5 leading-10 border-primary  border-2 border-transparent bg-theme-light  border-l-primary  border-t-0 border-r-0 border-b-0 focus:border-primary focus:border focus:ring-transparent py-2 rounded-lg focus:border-t focus:border-l focus:border-b focus:border-r  outline-none p-4"
            type="email"
            placeholder='Email Address'
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="text">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Subject</Form.Label>

        </div>
        <Form.Control asChild>
          <input
            className=" mb-5 leading-10 border-primary  border-2 border-transparent bg-theme-light  border-l-primary  border-t-0 border-r-0 border-b-0 focus:border-primary focus:border focus:ring-transparent py-2 rounded-lg focus:border-t focus:border-l focus:border-b focus:border-r  outline-none p-4"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="text">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">Subject</Form.Label>

        </div>
        <Form.Control asChild>
          <textarea
            className=" mb-5 leading-10 border-primary  border-2 border-transparent bg-theme-light  border-l-primary  border-t-0 border-r-0 border-b-0 focus:border-primary focus:border focus:ring-transparent py-2 rounded-lg focus:border-t focus:border-l focus:border-b focus:border-r  outline-none p-4"
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button className='w-full'>
          Post question
        </Button>
      </Form.Submit>

    </Form.Root>
  );
};

export default ContactForm;