import React, { Component } from 'react'
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import { Formik } from 'formik';
import {schemas} from '../utils/validation/schemas';
import {initialValues} from '../utils/validation/initialValues';
import { Button } from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';



class Signup extends Component {
    render() {
        return (
            <div>
                <div className="mt-4" style={{width: '325px', margin : 'auto'}}>
                    <Card style={{borderRadius : '6px'}} className="mt-4">
                        <h4 style={{textAlign : 'center'}}>Signup</h4>
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
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="username">Email Address</label>
                                            <InputText
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="username">Password</label>
                                            <InputText
                                                className="form-control"
                                            />
                                        </div>

                                    <div className="form-group">
                                        <label htmlFor="username">Confirm Password</label>
                                        <InputText
                                            className="form-control"
                                        />
                                    </div>

                                    {/* <div className="row">
                                        <div className="col-5 form-group">
                                            <label>Sex</label>
                                            <div className="p-col-12">
                                                <RadioButton inputId="rb1" name="city" value="New York" />
                                                <label htmlFor="rb1" className="p-radiobutton-label">Male</label>
                                            </div>
                                            <div className="p-col-12">
                                                <RadioButton inputId="rb2" name="city" />
                                                <label htmlFor="rb2" className="p-radiobutton-label">Female</label>
                                            </div>
                                        </div>

                                        <div className="form-group col-7">
                                            <label>Birth Date</label>
                                            <Calendar 
                                            />
                                        </div>
                                    </div> */}
                            <div className="mb-3">
                                <Checkbox inputId="cb1" value="Remember me">New York</Checkbox>
                                <label htmlFor="cb1" className="p-checkbox-label">I agress with the terms</label>
                            </div>

                            <div>
                                <Button className="btn btn-block btn-primary" label="Signup" />
                            </div>
                            </form>
                        )}
                        </Formik>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Signup
