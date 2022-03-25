preprocessing = ColumnTransformer(
    transformers=[("num", n_pipe, n_cols)],
    remainder="passthrough")
reg_full = Pipeline([
    ("preprocess", preprocessing),
    ("regressor", reg)
])
reg_full.fit(x_train, y_train)