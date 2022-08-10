import { useFormik, validateYupSchema} from "formik";
import * as Yup from "yup";
import {Container} from "./styles"


const Form = ()=>{
  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      phone:"",
      email:"",
      textarea:"",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(20, "No más de 20 carácteres")
      .required("Campo Obligatorio"),
      lastName: Yup.string()
      .max(20, "No más de 20 carácteres")
      .required("Campo Obligatorio"),
      phone: Yup.string()
      .max(10,"No más de 10 carácteres")
      .required("Campo Obligatorio"),
      email: Yup.string()
      .email("Formato invalido")
      .required("Campo obligatorio"),
    }),
    onSubmit: values =>{
      console.log(values)
    }

  })

  return(
    <Container>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='firstName'></label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder='Nombre'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="lastName"></label>
        <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Apellido"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ?
        (<div>{formik.errors.lastName}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="phone"></label>
        <input
        id="phone"
        name="phone"
        type="text"
        placeholder="Celular"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ?
        (<div>{formik.errors.phone}</div>): (null)}
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
        id="email"
        name="email"
        type="text"
        placeholder="E-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ?
        (<div>{formik.errors.phone}</div>) : (null)}
      </div>
      <div>
        <label htmlFor="textarea"></label>
        <input
        id="textarea"
        name="textarea"
        type="text"
        placeholder="Comentario"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textarea}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </Container>
  )
}
export default Form;