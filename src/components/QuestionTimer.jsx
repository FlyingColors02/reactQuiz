import { useEffect, useState } from "react";

export default function QuestionTimer({timeOut, onTimeOut}){
	const [remainingTime, setRemainingTime] = useState(timeOut);
	useEffect(()=>{
	const timer = setTimeout(()=>{
		onTimeOut()
	}, timeOut);

	return ()=>{clearTimeout(timer)};
	},[timeOut, onTimeOut])


	useEffect(()=>{
		const intervalTime = setInterval(()=>{
			setRemainingTime(prevState =>prevState -100);
		}, 100)

		return ()=> {clearInterval(intervalTime)};
	},[]);
	
	return <progress value={remainingTime} max={timeOut} id="question-time"/>
}