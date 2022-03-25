preprocessing = ColumnTransformer(
    transformers=[("num", numerical_pipe, numerical_columns)],
    remainder="passthrough")
reg_full = Pipeline([
    ("preprocess", preprocessing),
    ("regressor", reg)
])
reg_full.fit(x_train, y_train)