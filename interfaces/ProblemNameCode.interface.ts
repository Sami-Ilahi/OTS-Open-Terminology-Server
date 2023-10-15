export interface Code {
  SearchMethod: number;
  SearchSettings: {
    SearchMethod: number;
    DescriptionLevel: number;
    AttributesLevel: number;
    TextSearch: string;
    BooleanMode: number;
    DetailLevel: number;
    DescriptionLanguage: number;
    ChildrenLevel: number;
    ParentsLevel: number;
    MaxChilderenDeep: number;
    MaxParentsUp: number;
    ValueSet: string;
    AssociatedCodeSystem: string;
  };
  ConceptId: string;
  EffectiveTime: string;
  Active: boolean;
  ModuleId: number;
  DefinitionStatusID: number;
  PreferredName: string;
  DisplayNamePGOMedMij: string;
  FullySpecifiedName: string;
  CodeSystem: string;
  Synonyms: string[];
}

