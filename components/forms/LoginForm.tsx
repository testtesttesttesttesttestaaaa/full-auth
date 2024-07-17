'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	const { identifier, password, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			labelText: 'Email address',
			labelId: 'identifier',
			type: 'text',
			value: identifier,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			link: {
				linkText: 'Forgot password?',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign in'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
