create table TestTable (
	testIdentity int primary key identity not null,
	testGUID uniqueidentifier not null default newid() unique,
	testName varchar(100) not null default '',
	testDescription nvarchar(max) not null default '',
	testDate datetime not null default getdate(),
	testBit bit not null default 1
)

create view TestView as
select * from TestTable where testBit = 1