import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UnidadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TurnMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Unidad {
  readonly id: string;
  readonly patente?: string;
  readonly chasis?: string;
  readonly vin?: string;
  readonly descripcion?: string;
  readonly marca?: string;
  readonly modelo?: string;
  readonly modelo_codigo_fabrica?: string;
  readonly version?: string;
  readonly color?: string;
  readonly fecha_alta?: string;
  readonly fecha_patentamiento?: string;
  readonly fecha_vencimiento_garantia?: string;
  readonly tipo?: string;
  readonly clienteID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Unidad, UnidadMetaData>);
  static copyOf(source: Unidad, mutator: (draft: MutableModel<Unidad, UnidadMetaData>) => MutableModel<Unidad, UnidadMetaData> | void): Unidad;
}

export declare class Cliente {
  readonly id: string;
  readonly descripcion?: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly fecha_alta?: string;
  readonly fecha_ultimo_movimiento?: string;
  readonly email?: string;
  readonly telefono?: string;
  readonly celular?: string;
  readonly direccion?: string;
  readonly es_persona?: boolean;
  readonly sexo?: string;
  readonly dni?: number;
  readonly cuit?: string;
  readonly lugar_de_trabajo?: string;
  readonly ocupacion?: string;
  readonly fecha_nacimiento?: string;
  readonly horario_contacto?: string;
  readonly Unidads?: (Unidad | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cliente, ClienteMetaData>);
  static copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente, ClienteMetaData>) => MutableModel<Cliente, ClienteMetaData> | void): Cliente;
}

export declare class Turn {
  readonly id: string;
  readonly fecha_turno?: string;
  readonly fecha_ingreso?: string;
  readonly fecha_salida?: string;
  readonly fecha_salida_estimada?: string;
  readonly descripcion?: string;
  readonly cliente?: Cliente;
  readonly unidad?: Unidad;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly turnClienteId?: string;
  readonly turnUnidadId?: string;
  constructor(init: ModelInit<Turn, TurnMetaData>);
  static copyOf(source: Turn, mutator: (draft: MutableModel<Turn, TurnMetaData>) => MutableModel<Turn, TurnMetaData> | void): Turn;
}