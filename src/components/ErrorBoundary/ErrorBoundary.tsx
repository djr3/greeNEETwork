import React, { Component } from "react";
import { Modal, Note } from "@geist-ui/react";

export default class ErrorBoundary extends Component<{}, { error: any }> {
  constructor(props) {
    super(props);

    this.state = { error: false };

    this.closeHandler = this.closeHandler.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  closeHandler() {
    this.setState({ error: false });
  }

  render() {
    if (this.state.error)
      return (
        <>
          <Modal open={this.state.error} onClose={this.closeHandler}>
            <Modal.Title>Attenzione</Modal.Title>
            <Modal.Subtitle>
              Si è verificato un errore nell'applicazione
            </Modal.Subtitle>
            <Modal.Content>
              <p>
                Prova a ricaricare la pagina, se il problema persiste ti
                preghiamo di contattarci e segnalare il problema.
              </p>
              <Note
                type="error"
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  right: "2rem",
                  zIndex: 1000,
                }}
              >
                {this.state.error}
              </Note>
            </Modal.Content>
            <Modal.Action
              passive
              onClick={() => this.setState({ error: false })}
            >
              Chiudi
            </Modal.Action>
            {/* <Modal.Action>Submit</Modal.Action> */}
          </Modal>
          {this.props.children}
        </>
      );
    else return this.props.children;
  }
}
