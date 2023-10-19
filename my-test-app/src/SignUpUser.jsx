import { useForm } from "react-hook-form";

function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword){
            alert('Passwords Do not match')
        }
        else{
            alert(
                `First Name: ${data.firstName}, 
                Last Name: ${data.lastName}, 
                UserName: ${data.userName},
                Email: ${data.email},
                Password: ${data.password}`            
            );
            console.log(
                `First Name: ${data.firstName}, 
                Last Name: ${data.lastName}, 
                UserName: ${data.userName},
                Email: ${data.email},
                Password: ${data.password}` 
            )

        }
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>FirstName</label>
            <input
                type="text"
                {...register("firstName", {required: true })}
            />
            {errors.firstname && (
                <p>First Name is required.</p>
            )}
            <br></br>

            <label>LastName</label>
            <input
                type="text"
                {...register("lastName", {required: true })}
            />

            {errors.lastname && (
                <p>Last Name is required.</p>
            )}

            <br></br>   

            <label>UserName</label>
            <input
                type="userName"
                {...register("userName", {required: true })}
            />
            {errors.username && (
                <p>User Name is required.</p>
            )}

            <br></br>   
            <label>Email</label>
            <input
                type="email"
                {...register("email", {required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
                <p>Email is required.</p>
            )}
            <br></br>
            <label>Password</label>
            <input
                type="password"
                {...register("password", {required: true })}
            />
            {errors.password && (
                <p>Password is required.</p>
            )}
            <br></br>
            <label>Confirm Password</label>
            <input
                type="password"
                {...register("confirmPassword", {required: true })}
            />
            {errors.confirmpassword && (
                <p>Confirm Password is required.</p>
            )}

            
            <br></br>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default LoginForm