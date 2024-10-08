"""init migration

Revision ID: 9fbc4c5d3718
Revises: 
Create Date: 2024-09-08 17:08:37.898366

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9fbc4c5d3718'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('goals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=25), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.Column('status', sa.String(length=50), nullable=False),
    sa.CheckConstraint("status IN ('Not Started', 'In Progress', 'Completed')", name='check_status_valid'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('goals')
    # ### end Alembic commands ###
