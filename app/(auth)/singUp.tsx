import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function SingUp() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isSigningUp, setIsSigningUp] = useState<boolean>(true)

  return (
    <View className='flex-1 bg-[#030014] items-center'>
      <Image source={images.bg} className='absolute w-full z-0 top-0 left-0'  />

      <View className='mt-10 w-[100%] px-5 '>
        <Image source={icons.logo} className='w-12 h-10 mt-[7rem] mb-5 mx-auto' />
        <Text className='text-white text-5xl font-bold mt-5 mb-10 text-center'>{isSigningUp ? 'Cadastro' : 'Login'}</Text>

        <View className='w-full mb-8 flex-row items-center bg-[#0F0D23] rounded-full px-8 py-6'>
          <TextInput 
            autoCapitalize='none'
            placeholder='E-mail'
            placeholderTextColor="#a8b5db"
            value={email}
            onChangeText={(val) => setEmail(val)}
            className='text-white w-full text-xl'
          />
        </View>

        <View className='w-full flex-row items-center bg-[#0F0D23] rounded-full px-8 py-6'>
          <TextInput 
            autoCapitalize='none'
            placeholder='Senha'
            placeholderTextColor="#a8b5db"
            value={password}
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
            className='text-white w-full text-xl'
          />
        </View>

        <TouchableOpacity className='w-full mt-12 bg-[#283593] py-5 px-8 rounded-2xl '>
          <Text className='text-white text-center text-2xl font-bold'>{isSigningUp ? 'Cadastro' : 'Login'}</Text>
        </TouchableOpacity>

        <View className='mt-8'>
          {isSigningUp ? (
            <TouchableOpacity
            onPress={() => setIsSigningUp(!isSigningUp)}>
              <Text className='text-white text-lg text-center'>Já possui uma conta? <Text className='text-[#283593]'>Faça o Login!</Text></Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
            onPress={() => setIsSigningUp(!isSigningUp)}>
              <Text className='text-white text-lg text-center'>Ainda não possui uma conta? <Text className='text-[#283593]'>Cadastre-se!</Text></Text>
            </TouchableOpacity>
          )
          }
          
        </View>
      </View>
    </View>
  )
}