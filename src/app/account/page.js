
"use client"
import { useState } from 'react'
import Login from '../login/page'
import SignUp from '../signUp/page'

const Account = () => {
    const [login, setLogin] = useState(true)
    return (
      <>
        <div className="flex items-center justify-center flex-col mt-2 ">
          {
            login ? <Login/>  : <SignUp/>
          }
          <div>
            <button className="m-2" onClick={() => setLogin(!login)}>
              {login ? "Do not have account?SignUp" : "Already have Account?Login"}
            </button>
          </div>
        </div>
      </>
    )
}

export default Account