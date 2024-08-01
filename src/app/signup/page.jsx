'use client';

import Link from "next/link";
import {loginPath} from "@/utils/Routes";
import {gradient} from "@/utils/Theme";
import {useCallback, useState} from "react";

function SignUpPage() {
    const [credentials, setCredentials] = useState({name: '', email: '', password: '', geolocation: ''});

    const handleChange = useCallback((e) => {
        setCredentials({...credentials, [e.target.name]: [e.target.value]});
    }, [credentials]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        // logic for signup
    }, []);

    return (
        <div style={{height: '90vh', backgroundImage: 'url(https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover'}}
             className={'flex justify-center items-center'}>
            <div className={'container w-full max-w-md'}>
                <form onSubmit={handleSubmit} className={'flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4'}>
                    {/** name */}
                    <div className={''}>
                        <label htmlFor={'name'}>Name</label>
                        <input name={'name'}
                               className={'shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline'}
                               type={'text'} value={credentials.name}
                               onChange={handleChange}
                               required
                               placeholder={'Enter your name...'}
                        />
                    </div>

                    {/** email */}
                    <div className={''}>
                        <label htmlFor={'email'}>Email</label>
                        <input name={'email'}
                               className={'shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline'}
                               type={'email'} value={credentials.email}
                               onChange={handleChange}
                               required
                               placeholder={'Enter your email...'}
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

                    {/** geolocation */}
                    <div className={''}>
                        <label htmlFor={'geolocation'}>Address</label>
                        <input name={'geolocation'}
                               className={'shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline'}
                               type={'text'} value={credentials.geolocation}
                               onChange={handleChange}
                               required
                               placeholder={'Enter your address...'}
                        />
                    </div>

                    <div className={'flex gap-4 justify-end items-center'}>
                        {/** new user */}
                        <Link href={loginPath}>
                            <button className={`self-end border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded py-2 px-6 hover:${gradient} hover:text-gray-100`}>
                                Already a User?
                            </button>
                        </Link>

                        {/** signup */}
                        <button type={'submit'} className={`border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded py-2 px-6 hover:${gradient} hover:text-gray-100`}>
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
