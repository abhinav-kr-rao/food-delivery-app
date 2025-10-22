import CustomButton from '@/components/CustomButton'
import Input from '@/components/Input'
import { signIn } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
const Signin = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: "" })

    const handleSubmit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please enter valid email address and password')
            return;
        }

        setIsSubmitting(true);
        try {
            // call appwrite sign in 
            await signIn({ email: form.email, password: form.password });

            Alert.alert('Success', 'You are signed in successfully');
            router.replace('/');
        } catch (err) {
            console.log("Error submitting", err);

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View className='gap-10 rounded-lg bg-white p-5 mt-5 '>


            <Input
                placeholder='Enter your email'
                value={form.email}
                onChangeText={(text) => {
                    setForm((prev) => ({ ...prev, email: text }))
                }}
                label='Email'
                keyboardType='email-address'
            />
            <Input
                placeholder='Enter your password'
                value={form.password}
                onChangeText={(text) => { setForm((prev) => ({ ...prev, password: text })) }}
                label='Password'
                secureTextEntry={true}
            />
            <CustomButton
                title='Sign In'
                isLoading={isSubmitting}
                onPress={handleSubmit}
            />
            <View className=' flex justify-center flex-row gap-2 mt-5'>
                <Text className='base-regular text-gray-100'>
                    Don&apos;t have an account?
                </Text>
                <Link className='base-bold text-primary' href={'/signup'}>
                    SignUp
                </Link>
            </View>
        </View>
    )
}

export default Signin