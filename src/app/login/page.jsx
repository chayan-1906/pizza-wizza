'use client';

import {useCallback, useState} from "react";
import {gradient} from "@/utils/Theme";
import Link from "next/link";
import {signupPath} from "@/utils/Routes";

function LoginPage() {
    const [credentials, setCredentials] = useState({email: '', password: ''});

    const handleChange = useCallback((e) => {
        setCredentials({...credentials, [e.target.name]: [e.target.value]});
    }, [credentials]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        // logic for login
    }, []);

    return (
        <div style={{height: '90vh', backgroundImage: 'url(https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover'}}
             className={'flex justify-center items-center'}>
            <div className={'container w-full max-w-md'}>
                <form onSubmit={handleSubmit} className={'flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4'}>
                    {/** username */}
                    <div className={''}>
                        <label htmlFor={'email'}>Username</label>
                        <input name={'email'}
                               className={'shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline'}
                               type={'email'} value={credentials.email}
                               onChange={handleChange}
                               required
                               placeholder={'Enter your email/username...'}
                        />
                    </div>

                    {/** password */}
                    <div className={''}>
                        <label htmlFor={'password'}>Password</label>
                        <input name={'password'}
                               className={'shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline'}
                               type={'password'} value={credentials.password}
                               onChange={handleChange}
                               required
                               placeholder={'Enter your password...'}
                        />
                    </div>

                    <div className={'flex gap-4 justify-end items-center'}>
                        {/** new user */}
                        <Link href={signupPath}>
                            <button className={`border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded py-2 px-6 hover:${gradient} hover:text-gray-100`}>
                                Already a User?
                            </button>
                        </Link>

                        {/** login */}
                        <button type={'submit'} className={`border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded py-2 px-6 hover:${gradient} hover:text-gray-100`}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
