import { CustomInputProps } from '@/type';
import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label,
    placeholder = "Enter text",
    onChangeText,
    value,
    secureTextEntry = false,
    keyboardType = 'default' }: CustomInputProps) => {


    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className=' w-full'>
            <Text className='label'>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={"#888"}
                className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
            />
        </View>
    )
}

export default Input