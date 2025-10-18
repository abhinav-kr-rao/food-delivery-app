import CustomButton from '@/components/CustomButton'
import Input from '@/components/Input'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
const Signup = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: "" })

    const handleSubmit = async () => {
        if (!form.email || !form.password || !form.name) {
            Alert.alert('Error', 'Please enter valid name, email address and password')
            return;
        }

        setIsSubmitting(true);
        try {
            // call appwrite sign up 


            Alert.alert('Success', 'You are signed up successfully');
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
                placeholder='Enter your name'
                value={form.name}
                onChangeText={(text) => {
                    setForm((prev) => ({ ...prev, name: text }))
                }}
                label='Name'
            />
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
                title='Sign Up'
                isLoading={isSubmitting}
                onPress={handleSubmit}
            />
            <View className=' flex justify-center flex-row gap-2 mt-5'>
                <Text className='base-regular text-gray-100'>
                    Already have an account ?
                </Text>
                <Link className='base-bold text-primary' href={'/signin'}>
                    Sign In
                </Link>
            </View>
        </View>
    )
}

export default Signup