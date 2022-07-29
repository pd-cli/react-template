import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModelState } from "../../models"

const Demo01 = () => {
    const global = useSelector((state: ModelState) => state.global)
    const disptach = useDispatch();

    return (
        <div>
            <div>token: {global.token}</div>
            <button
                onClick={() => {
                    disptach({
                        type: 'global/setToken',
                        payload: 'hello'
                    })
                }}
            >
                同步改变token
            </button>
            <button
                onClick={() => {
                    disptach({
                        type: 'global/asyncSetToken',
                        payload: global.token + '-login'
                    })
                }}
            >
                异步改变token
            </button>
        </div>
    )
}

export default Demo01
