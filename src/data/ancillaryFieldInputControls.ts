export const ANCILLARY_FIELD_INPUT_CONTROLS = [
  {
    value: 1,
    label: 'Integer',
    sortOrder: 1,
  },
  {
    value: 2,
    label: 'Alphanumeric',
    sortOrder: 3,
  },
  {
    value: 3,
    label: 'Select (from a list of choices)',
    sortOrder: 3,
  },
  {
    value: 4,
    label: 'Decimal',
    sortOrder: 2,
  },
];
// CREATE TABLE IF NOT EXISTS cv_ancillary_field_input_controls (id integer primary key not null, sort_order integer not null, display text not null)
// INSERT OR IGNORE INTO cv_ancillary_field_input_controls VALUES (1, 1, 'Integer')
// INSERT OR IGNORE INTO cv_ancillary_field_input_controls VALUES (2, 3, 'Alphanumeric')
// INSERT OR IGNORE INTO cv_ancillary_field_input_controls VALUES (3, 4, 'Select (from a list of choices)')
// INSERT OR IGNORE INTO cv_ancillary_field_input_controls VALUES (4, 2, 'Decimal')
