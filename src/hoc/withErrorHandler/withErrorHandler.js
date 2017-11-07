import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import MyAuth from '../myaux';
import axios from '../../axios-orders';

const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use( req => {
        this.setState({
          error: null
        });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({
          error: error
        });
      });
    }

    componentWilUnmount () {
      console.log('unmount ', this.reqInterceptor, this.resInerceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);

    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      });
    }

    render () {
      return (
        <MyAuth>
          <Modal
            show={this.state.error}
            clicked={this.errorConfirmedHandler}>
            {this.state.error ?  this.state.error.message : null }
          </Modal>
          <WrappedComponent {...this.props} />
        </MyAuth>
      );
    }
  }
}

export default withErrorHandler;
