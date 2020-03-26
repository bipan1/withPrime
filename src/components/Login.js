import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Card} from 'primereact/card';
import { Button } from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import { Formik } from 'formik';
import {schemas} from '../utils/validation/schemas';
import {initialValues} from '../utils/validation/initialValues';

class Login extends Component {
    render() {
        return (
            <div className="mt-4" style={{width: '325px', margin : 'auto'}}>
                <Card style={{borderRadius : '6px'}} className="mt-4">
                    <h4 style={{textAlign : 'center'}}>Login</h4>
                    <Formik
                        initialValues={initialValues.login}
                        validationSchema={schemas.login}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                this.openconfirm(values);
                                setSubmitting(false);
                            }, 500);
                        }}
                    >{props => (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                props.handleSubmit();
                        }}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <InputText
                                    value={props.values.username}
                                    className={props.errors.username ? "form-control is-invalid" : "form-control"}
                                    onBlur={props.handleBlur}
                                    onChange={props.handleChange}
                                />
                                {props.errors.username && props.touched.username ? (
                                    <span className="error"><i
                                        className="" />{props.errors.username}</span>
                                ) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Password</label>
                                <InputText
                                    className={props.errors.password ? "form-control is-invalid" : "form-control"}
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                />
                                {props.errors.password && props.touched.password ? (
                                    <span className="error"><i
                                        className="" />{props.errors.password}</span>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <Checkbox inputId="cb1" value="Remember me">New York</Checkbox>
                                <label htmlFor="cb1" className="p-checkbox-label">Remember me</label>
                            </div>

                            <div>
                                <Button className="btn btn-block btn-primary" label="Login" />
                            </div>
                        </form>
                    )}
                    </Formik>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="mt-3 social-icons">
                            <a href="#!">
                                <i class="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i class="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i class="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#!">
                                <i class="fab fa-github fa-2x"></i>
                            </a>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <label>Forget <a href="">Password?</a></label>
                        </div>
                    </div>

                    
                   
                    
                </Card>
            </div>
        )
    }
}

export default Login;
