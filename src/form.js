import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Container,Segment,Button,Grid} from 'semantic-ui-react';
import * as Yup from 'yup';

class Forms extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    fullName: '',
                    LegalName: '',
                    email: '',
                    country:'',address1:'',address2:'',
                    city:'',
                    state:'',
                    phone:'',seller:'',product:'',GST:'',zip:''
                }}
                validationSchema={Yup.object().shape({
                    LegalName: Yup.string()
                        .min(2, 'Too Short!')
                        .required('Legal Name is required'),
                    fullName: Yup.string()
                        .min(2, 'Too Short!')
                        .required('Full Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    country: Yup.string()
                        .required('Country is required'),
                    city: Yup.string()
                        .required('City is required'),
                    state: Yup.string()
                        .required('State is required'),
                    phone: Yup.string()
                        .matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
                        .required('Phone number is required'),
                    zip: Yup.string()
                        .max(5,'Enter valid zip code')
                        .required('zip is required'),
                    GST: Yup.string()
                        .required('GST is required'),
                    product: Yup.string()
                        .required('This field is required'),
                    seller: Yup.string()
                        .required('This field is required'),
                    address1: Yup.string()
                        .required('This field is required'),
                    address2: Yup.string()
                        .required('This field is required'),
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Container left>
                        <Segment secondary  style={{margin:'auto',borderRadius:10,width:800,fontSize:18}}>
                    <Form>
                        <h1 style={{textAlign:'center'}}> Tell Us about Your Business</h1>
                            <Grid style={{fontSize:17,padding:40}}>
                            <Grid.Row><Grid.Column  width={10}><label htmlFor="LegalName">Legal Name</label><br/>
                            <Field name="LegalName" type="text" className={'form-control' + (errors.LegalName && touched.LegalName ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}}/>
                            <ErrorMessage name="LegalName" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}}/></Grid.Column></Grid.Row>

                       
                            <Grid.Row><Grid.Column  width={10}><label htmlFor="fullName">Full Name</label><br/>
                            <Field name="fullName" type="text" className={'form-control' + (errors.fullName && touched.fullName ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}}/>
                            <ErrorMessage name="fullName" component="div" className="invalid-feedback"style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>
                            
                            <Grid.Row><Grid.Column  width={10}><label htmlFor="email">Email</label><br/>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}}/>
                            <ErrorMessage name="email" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>
                        
                            <Grid.Row><Grid.Column  width={10}><label htmlFor="Country">Country</label><br/>
                            <Field name="country" type="text" className={'form-control' + (errors.Country && touched.Country ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="country" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                
                            <Grid.Row><Grid.Column><label htmlFor="Address1">Address1</label><br/>
                            <Field name="address1" type="text" className={'form-control' + (errors.address1 && touched.address1 ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}}/>
                            <ErrorMessage name="address1" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                            <Grid.Row><Grid.Column><label >Address2</label><br/>
                            <Field name="address2" type="text" className={'form-control' + (errors.address2 && touched.address2 ? ' is-invalid' : '')}style={{borderRadius:5,border:'grey',padding:10,width:600}}/>
                            <ErrorMessage name="address2" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>


                            <Grid.Row><Grid.Column  width={10}><label htmlFor="City">City</label><br/>
                            <Field name="city" type="text" className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="city" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                            <Grid.Row><Grid.Column  width={8}><label htmlFor="State">State</label><br/>
                            <Field name="state" type="text" className={'form-control' + (errors.state && touched.state ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:340}} />
                            <ErrorMessage name="state" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column>
                            
                            <Grid.Column  width={8}><label htmlFor="zip">Zip</label><br/>
                            <Field name="zip" type="text" className={'form-control' + (errors.zip && touched.zip ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:245}} />
                            <ErrorMessage name="zip" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>
                        
                            <Grid.Row><Grid.Column  width={10}><label htmlFor="GST">GST NO.</label><br/>
                            <Field name="GST" type="text" className={'form-control' + (errors.GST && touched.GST ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="GST" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                            <Grid.Row><Grid.Column  width={10}><label htmlFor="phone">Phone</label><br/>
                            <Field name="phone" type="phone" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                            <Grid.Row><Grid.Column  width={10}><label htmlFor="product">Make Product Category</label><br/>
                            <Field name="product" type="text" className={'form-control' + (errors.product && touched.product ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="product" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>

                            <Grid.Row><Grid.Column  width={10}><label htmlFor="seller">Seller Category</label><br/>
                            <Field name="seller" type="text" className={'form-control' + (errors.seller && touched.seller ? ' is-invalid' : '')} style={{borderRadius:5,border:'grey',padding:10,width:600}} />
                            <ErrorMessage name="seller" component="div" className="invalid-feedback" style={{color:'red',fontSize:14}} /></Grid.Column></Grid.Row>


                        <div className="form-group">
                            <Button type="submit" inverted color='green'>Save</Button>
                            
                        </div>
                        </Grid>
                    </Form>
                    </Segment>
                    </Container>
                )}
            />
        )
    }
}

export default Forms;
