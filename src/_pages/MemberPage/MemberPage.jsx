import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import DataGrid from '../../_components/DataGrid';
import DefaultContainer from '../../_components/DefaultContainer';
import MemberService from '../../_services/MemberService';
import '../../App.css';

export default class MemberPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            creating: false,
            novoMembro: {
                nome: '',
                cargo: ''
            }
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.loadGrid = this.loadGrid.bind(this);
        this.alterar = this.alterar.bind(this);
        this.deletar = this.deletar.bind(this);
        this.limparDados = this.limparDados.bind(this);
        this.salvarDados = this.salvarDados.bind(this);
    }

    componentDidMount() {
        this.loadGrid();
    }
    
    loadGrid() {
        MemberService.getAll(true)
            .then((response) => response.json())
            .then((data) => this.setState({ ...this.state, data }));
    }

    alterar(dataRow) {
        console.log('Alterar');
        console.log(dataRow);
    }

    deletar(dataRow) {
        MemberService.delete(dataRow.id)
            .then(() => this.loadGrid())
            .catch((err) => console.log(err));
    }

    limparDados() {
        this.setState({
            ...this.state,
            creating: false,
            novoMembro: {
                nome: '',
                cargo: ''
            }
        });
    }

    salvarDados() {
        const newMember = {
            nome: this.state.novoMembro.nome,
            cargo: {
                nome: this.state.novoMembro.cargo
            }
        };

        MemberService.create(newMember)
            .then((response) => {
                console.log(response.json());
                this.limparDados();
            })
            .catch((err) => console.log(err));
    }
    
    render() {
        const gridHeaders = [
            { label: 'Id', size: 2, data: 'id' },
            { label: 'Nome', size: 4, data: 'nome' },
            { label: 'Cargo', size: 4, data: 'cargo' }
        ];

        return (
            <div className="App">
                <h1>Membros da Guilda</h1>
                <DefaultContainer>
                    <Button fullWidth color="primary" variant="contained" onClick={() => this.setState({...this.state, creating: !this.state.creating})}>Criar novo membro</Button>
                    <Collapse className="Full-Width" in={this.state.creating} timeout="auto" unmountOnExit>
                        <div id="form-membro" style={{marginTop: '5px', marginBottom: '15px'}}>
                            <TextField 
                                color="secondary"
                                className="Default-Text-Field" 
                                label="Nome" 
                                value={this.state.novoMembro.nome} 
                                onChange={(event) => this.setState({...this.state, novoMembro: {...this.state.novoMembro, nome: event.target.value}})} 
                            />
                            <br />
                            <TextField 
                                color="secondary"
                                className="Default-Text-Field"
                                label="Cargo" 
                                value={this.state.novoMembro.cargo} 
                                onChange={(event) => this.setState({...this.state, novoMembro: {...this.state.novoMembro, cargo: event.target.value}})} 
                            />
                        </div>
                        <ButtonGroup fullWidth variant="contained" color="primary" aria-label="menu button group">
                            <Button onClick={this.limparDados}>Cancelar</Button>
                            <Button onClick={this.salvarDados}>Salvar</Button>
                        </ButtonGroup>
                    </Collapse>
                </DefaultContainer>
                <DataGrid 
                    headers={gridHeaders} 
                    data={this.state.data} 
                    alterarClick={this.alterar} 
                    deletarClick={this.deletar} 
                />
            </div>
        )
    }
}